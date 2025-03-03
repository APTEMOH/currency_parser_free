#### 1.

---

# Currency Parser Free

Мануал

## Как установить

- залить файлы
- заполнить .env
- выполнить команды:
    - `npm install`
    - `npm run build`
- запустить парсер:
    - `pm2 start dist/app.js --name "CurrencyParserFree"`


### Пример .env

```
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_DB=0
EXCHANGE_RATE_KEY_PREFIX="exchange_rate:"
KEY=qwerty12345678
```

---
```
Пример:
[nodemon] restarting due to changes...
[nodemon] starting `ts-node src/app.ts`
Успешно подключились к Redis
{
    success: true,
    timestamp: 1741032063,
    base: 'EUR',
    date: '2025-03-03',
    rates: {
        RUB: 93.931516,
        EUR: 1,
        UAH: 43.480371,
        KZT: 523.621821,
        USD: 1.047214
    }
}

{
usd: { usd: 1, eur: 0.9549, rub: 89.6965, uah: 41.52, kzt: 500.0141 },
eur: { usd: 1.0472, eur: 1, rub: 93.9315, uah: 43.4803, kzt: 523.6218 },
rub: { usd: 0.0111, eur: 0.0106, rub: 1, uah: 0.4628, kzt: 5.5745 },
uah: { usd: 0.024, eur: 0.0229, rub: 2.1603, uah: 1, kzt: 12.0427 },
kzt: { usd: 0.0019, eur: 0.0019, rub: 0.1793, uah: 0.083, kzt: 1 }
}
```
---

---
THANKS https://github.com/rentstack @rentstack
---
---

# Поддержите наш проект

Мы стремимся развивать наши проекты и поддерживать VPS сервер для их работы. Если вы хотите помочь, вы можете сделать пожертвование в криптовалюте.

## Как поддержать

Ваши донаты помогут нам покрыть расходы на сервер и развитие проекта. Мы принимаем следующие криптовалюты:

- **Bitcoin (BTC)**: `bc1q7phnhfv3veqny03sn3wdzmg7qufp3z05w9kv6s`
- **Ethereum (ETH)**: `-`
- **Litecoin (LTC)**: `LMietss16Bpgex8ATkgzmWbbYio5mcEAuw`
- **Tron (TRX)**: `TG2zE9WTKWrxwNRPMm1CS6BCSRNDeYEBYL`
- **Tether (USDT TRC20)**: `TFH9hmWS7pq5fmbgEYjsJTvegCt1C7zLax`
- **Tether (USDT ERC20)**: `-`
- **Bitcoin Cash (BCH)**: `bitcoincash:qztjnw0uqfg0fenk35hld0tu8qpy6a4djvh5pjquzh`
- **Dogecoin (DOGE)**: `DLKJvCY6YdJ3UfdKiefJRqj7in7qSjCdTG`

### Почему это важно?

Ваши пожертвования помогут нам:

- Поддерживать и обновлять наш VPS сервер.
- Разрабатывать новые функции и улучшения для проектов.
- Покрывать расходы на хостинг и другие нужды.

## Как сделать донат

1. Выберите криптовалюту, которую хотите отправить.
2. Используйте указанные адреса для перевода.
3. Вы можете указать, для какого проекта предназначен донат в сообщении.

## Спасибо за вашу поддержку!

Каждое пожертвование имеет значение и помогает нам расти. Если у вас есть вопросы или предложения, не стесняйтесь связаться с нами.

---

*Следите за обновлениями и новыми проектами на нашем GitHub!*
