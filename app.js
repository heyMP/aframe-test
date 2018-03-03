const scene = document.querySelector('a-scene');
const toast = document.querySelector('paper-toast');
scene.addEventListener('click', function (e) {
  if (e.detail) {
    if (e.detail.target) {
      if (e.detail.target.classList) {
        if (e.detail.target.classList.contains('hotspot')) {
          // we can get the unique name from the id
          const name = e.detail.target.id;
          // we will use that to find the activeObject in the Objects field
          // toast.show(`Hey you clicked on ${name}`);
          const dialog = document.querySelector(`paper-dialog[data-id="${name}"]`);
          dialog.open();
          // console.log(toast);
          // const activeObject = this.scene.data.objects.find(item => item.title === name);
          // if (activeObject) {
          //   this.activeObjectId = activeObject.id;
          //   this.$$('#objectsDialog').open();
          // }
        }
      }
    }
  }
});