const getRandomFutureDate = (): string => {
    const currentDate = new Date();
    const futureDate = new Date(
        currentDate.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000 // Генерируем случайное количество миллисекунд в будущем (максимум 30 дней)
    );

    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    };

    return futureDate.toLocaleString('en-US', options);
}


export default getRandomFutureDate;
