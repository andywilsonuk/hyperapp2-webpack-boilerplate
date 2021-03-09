import { h, app } from 'hyperapp';
import Description from '../../src/components/description';

const assertView = (appState, expected, done) => {
    const view = (state, actions) => h(
        'div',
        {
            oncreate() {
                for (let i = 0; i < expected.length; i += 1) {
                    expect(document.body.innerHTML).toEqual(expect.stringContaining(expected[i]));
                }
                done();
            },
        },
        [Description(state, actions)],
    );
    app(appState, null, view, document.body);
};


test('Static content exists in HTML', (done) => {
    const appState = null;
    assertView(
        appState,
        ['hyperapp', 'boilerplate', 'webpack4'],
        done,
    );
});
