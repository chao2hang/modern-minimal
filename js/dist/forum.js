(function () {
  if (!window.flarum || !flarum.core || !flarum.core.compat) return;

  var appMod = flarum.core.compat['forum/app'];
  var app = appMod && (appMod.default || appMod);
  var extend = flarum.core.compat.extend;
  var tagHeroMod = flarum.core.compat['tags/components/TagHero'];
  var TagHero = tagHeroMod && (tagHeroMod.default || tagHeroMod);

  if (!app || !extend || !TagHero) return;

  extend(TagHero.prototype, 'view', function (vnode) {
    var tag = this.attrs && (this.attrs.model || this.attrs.tag || this.attrs.tagModel);
    if (!tag || !tag.attribute) return;

    var url = tag.attribute('imageUrl');
    if (!url) return;

    vnode.attrs = vnode.attrs || {};
    vnode.attrs.style = Object.assign({}, vnode.attrs.style, {
      '--tag-hero-image': 'url(' + url + ')',
    });
  });
})();
