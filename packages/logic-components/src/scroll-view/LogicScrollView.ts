import {LogicComponent} from "../LogicComponent";

/**
 * 逻辑滚动视图
 */
export interface LogicScrollView extends LogicComponent {


    /**
     * 滚动方向
     */
    direction: 'x' | 'y'

    /**
     * 滚动到
     * @param position
     */
    scrollTo: (position: number) => void;

    /**
     * 滚动到头部
     * {@see LogicScrollView#scrollTo}
     */
    scrollTop: () => void;

    /**
     * 滚动到底部
     * {@see LogicScrollView#scrollTo}
     */
    scrollBottom: () => void;
}
