// Auto generated by Testing Dashboard
// File        : scripts/Modify/BreakOut/Tests/BreakOutTest04.js
// Timestamp   : 2015-11-04 21:26:33
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function BreakOutTest04() {
    TdbTest.call(this, 'scripts/Modify/BreakOut/Tests/BreakOutTest04.js');
}

BreakOutTest04.prototype = new TdbTest();

BreakOutTest04.prototype.test00 = function() {
    qDebug('running BreakOutTest04.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/BreakOut/Tests/data/line_xline_ray.dxf');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::ModifyToolsPanel::BreakOutProButton');
    this.setToolOption('BreakOutPro/RemoveSegment', 'true');
    this.setToolOption('BreakOutPro/LineMode', 'false');
    this.setZoom(11.120567375886525, new RVector(-3.74235, 2.37309, 0, true));
    var p = new RVector(30.449617, 24.603954);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120567375886525, new RVector(-3.74235, 2.37309, 0, true));
    var p = new RVector(29.910077, 20.197704);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120567375886525, new RVector(-3.74235, 2.37309, 0, true));
    var p = new RVector(29.550383, 10.396046);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120567375886525, new RVector(-3.74235, 2.37309, 0, true));
    var p = new RVector(29.370536, 7.428571);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(40.161352, 14.982143);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(39.531888, 14.982143);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('BreakOutTest04_000.dxf');
    this.tearDown();
    qDebug('finished BreakOutTest04.test00()');
};

