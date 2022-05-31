import React from "react";
import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from "cesium";
export default function Viewport() {
    React.useEffect(() => {
        const viewer = new Viewer('cesiumContainer', {
            terrainProvider: createWorldTerrain(),
            geocoder: false, //搜索框
            homeButton: false, //home按钮
            sceneModePicker: false, //3d/2d 模式切换按钮
            baseLayerPicker: false, //图层选择按钮
            navigationHelpButton: false, //右上角的帮助按钮
            animation: false, //左下角的动画控件的显示
            shouldAnimate: false, //控制模型动画
            timeline: false, //底部的时间轴
            fullscreenButton: false, //右下角的全屏按钮
            selectionIndicator: false, //选择指示器
            infoBox: true, //信息面板
        });
        viewer._cesiumWidget._creditContainer.style.display = "none";
    }, [0]);
    return (
        <div className="viewport">
            <div id="cesiumContainer"></div>
        </div>
    )
}