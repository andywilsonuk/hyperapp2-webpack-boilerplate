import h from 'hyperapp-jsx-pragma';

export default ({ num, add, sub }) => (
    <div class="counter">
        <section>
            <button class="counter-button" onclick={sub} disabled={num < 1}>&minus;</button>
            <p class="count">{num}</p>
            <button class="counter-button" onclick={add}>+</button>
        </section>
    </div>
);
