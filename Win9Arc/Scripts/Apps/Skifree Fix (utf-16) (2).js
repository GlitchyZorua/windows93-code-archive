le._apps.skifree.exec = function ()
{
  var data = {
    url: "/c/programs/SkiFree/index.html",
    icon: "/c/sys/skins/w93/apps/skifree.gif",
    title: "SkiFree",
    help: '<b>Credits :</b><br><a target="_blank" href="https://basicallydan.github.io/skifree.js/">https://basicallydan.github.io/skifree.js/</a>',
    bodyClass: "skin_inset_deep skin_light",
    width: 530,
    height: 530
  };
  $window.call(this, data);
};