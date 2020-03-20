/**
 * 下拉刷新操作逻辑抽象
 */
export interface LogicPullRefresh<T> {


    /**
     * 当前查询页码 从1开始
     */
    readonly queryPage: number;

    /**
     * 当前查询大小  默认：10
     */
    readonly querySize: number;

    /**
     * 是否处于查询中
     */
    readonly loading: number;

    /**
     * 已经查询到最好一页
     * tip: 移动端一般不统计的列表的总数，查询到最后一页的标记通过
     * 服务端返回的数据的长度和当前{@see LogicPullRefresh#querySize}查询
     * 大小做对比，计算方式如下：
     *    theLastPage=(接口结果集).length < querySize
     * 这种情况下，最坏的情况也就是只是多做一次查询，（总数统计一版是比较耗费资源的）
     */
    readonly theLastPage: number;


    /**
     * 触发上拉加载
     * 一般通过 {@code lowerThreshold} 距离列表底部的高度（这个高度是指列表的滚动高度）来处理
     */
    onTriggerLoadMore: () => Promise<T>;


    /**
     * 刷新
     */
    refresh: () => Promise<void>;


    /**
     * 滚动到具体的某个元素
     * @param elementIndex
     */
    scrollToElement: (elementIndex: number) => void;
}
