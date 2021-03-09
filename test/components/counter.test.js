import { h, app } from 'hyperapp';
import appActions from '../../src/actions';
import appState from '../../src/state';
import Counter from '../../src/components/counter';

test('Counter test', (done) => {
    const view = (state, actions) =>
        h(
            'div',
            {
                oncreate() {
                    expect(document.body.innerHTML).toEqual(expect.not.stringContaining('0'));
                    expect(document.body.innerHTML).toEqual(expect.stringContaining('1'));
                    done();
                },
            },
            [Counter(state, actions)],
        );

    const main = app(appState, appActions, view, document.body);

    main.add();
});

test('Counter test', (done) => {
    const view = (state, actions) =>
        h(
            'div',
            {
                oncreate() {
                    expect(document.body.innerHTML).toEqual(expect.not.stringContaining('0'));
                    expect(document.body.innerHTML).toEqual(expect.stringContaining('-1'));
                    done();
                },
            },
            [Counter(state, actions)],
        );

    const main = app(appState, appActions, view, document.body);

    main.sub();
});
