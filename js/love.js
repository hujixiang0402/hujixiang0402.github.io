function meet() {
  var e =
      (new Date().getTime() - new Date("06/25/2020 00:00:00").getTime()) /
      1e3 /
      60 /
      60 /
      24,
    t = Math.floor(e);
  document.getElementById(
    "contentAA"
  ).innerHTML = `<font size=4><b>1. 认识小猫咪已经有 ${t} 天 </b> <i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i></font>`;
}
function together() {
  var e =
      (new Date().getTime() - new Date("09/14/2020 00:00:00").getTime()) /
      1e3 /
      60 /
      60 /
      24,
    t = Math.floor(e);
  document.getElementById(
    "contentBB"
  ).innerHTML = `<font size=4><b>2. 和小猫咪已经在一起 ${t} 天 </b> <i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i></font>`;
}
meet(), together();
