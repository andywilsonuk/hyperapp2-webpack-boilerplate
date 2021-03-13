import h from 'hyperapp-jsx-pragma';
import Description from './description';
import Counter from './counter';
import actions from '../actions';

export default (state) =>
    <div>
        <Description />
        <Counter num={state.num} add={actions.add} sub={actions.sub} />
    </div>;
