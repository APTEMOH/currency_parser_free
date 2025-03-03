import axios from 'axios';
import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redis = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: Number(process.env.REDIS_PORT) || 6379,
    db: Number(process.env.REDIS_DB) || 0
});

const exchangeRateKeyPrefix = 'exchange_rate:';

redis.on('connect', () => {
    console.log('Успешно подключились к Redis');
});

redis.on('error', (err) => {
    console.error('Ошибка подключения к Redis:', err);
    process.exit(1);
});

type Rates = {
    [key: string]: { [key: string]: number };
};

interface FixerResponse {
    success: boolean;
    rates: Record<string, number>;
}

const API_URL = 'https://data.fixer.io/api/latest';
const currencies = ['USD', 'EUR', 'RUB', 'UAH', 'KZT'];

function truncateNumber(value: number): string {
    const valueStr = value.toString();

    // Разделяем строку на целую и дробную части
    const [integerPart, decimalPart] = valueStr.split('.');

    // Если дробная часть существует
    if (decimalPart) {
        // Если дробная часть больше 4 знаков, то обрезаем
        if (decimalPart.length > 4) {
            return `${integerPart}.${decimalPart.substring(0, 4)}`;
        }
        // Если дробная часть меньше или равна 4 знакам, то возвращаем без изменений
        return valueStr;
    }

    // Если дробной части нет, то возвращаем без изменений
    return valueStr;
}

async function getExchangeRates(): Promise<Rates | null> {
    try {
        const response = await axios.get<FixerResponse>(API_URL, {
            params: {
                access_key: process.env.KEY,
                //base: 'usd',
                symbols: 'rub, eur, uah, kzt, usd',
            },
        });
        if (!response.data.success) {
            console.error('Ошибка получения данных от API');
            return null;
        }

        console.log(response.data);

        const rates = response.data.rates;
        const exchangeRates: Record<string, Record<string, number>> = {};

        const result: Rates = {};
        currencies.forEach(base => {
            result[base.toLowerCase()] = {};
            currencies.forEach(target => {
                result[base.toLowerCase()][target.toLowerCase()] = base === target ? 1 : Number(truncateNumber(rates[target] / rates[base]));
            });
        });

        return result;
    } catch (error) {
        console.error('Ошибка при получении курсов валют:', error);
        return null;
    }
}

getExchangeRates().then(async (exchangeRates) => {
    await redis.set('allExchangeRates', JSON.stringify(exchangeRates));
    console.log(exchangeRates);
}).catch(error => {
    console.error("Ошибка при получении курсов валют:", error);
});
