function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes-container');
    const snowflakeCount = 200;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const x = Math.random() * window.innerWidth;
        snowflake.style.left = `${x}px`;

        const delay = Math.random() * 5;
        snowflake.style.animationDelay = `${delay}s`;

        const duration = Math.random() * 3 + 2;
        snowflake.style.animationDuration = `${duration}s`;

        const size = Math.random() * 5 + 5; 
        snowflake.style.height = `${size}px`;

        snowflakesContainer.appendChild(snowflake);
    }
}

window.onload = createSnowflakes;