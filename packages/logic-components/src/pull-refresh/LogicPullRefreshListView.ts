import {LogicScrollView} from "../scroll-view/LogicScrollView";
import {LogicPullRefresh} from "./LogicPullRefresh";
import {LogicComponent} from "../LogicComponent";


/**
 * 下拉刷新列表
 */
export interface LogicPullRefreshListView<T> extends LogicPullRefresh<T>, LogicScrollView {

    /**
     * 渲染每一行数据
     * @param item
     * @param index
     */
    renderRow: <E extends LogicComponent>(item: T, index: number) => E;
}
