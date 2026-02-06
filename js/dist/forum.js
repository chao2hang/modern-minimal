(function () {
  function extendTagHero() {
    var compat = flarum.core && flarum.core.compat;
    if (!compat) return;

    var extendMod = compat['common/extend'] || compat.extend;
    var extend = extendMod && (extendMod.extend || extendMod);
    var tagHeroMod = compat['tags/components/TagHero'];
    var TagHero = tagHeroMod && (tagHeroMod.default || tagHeroMod);
    if (!extend || !TagHero) return;

    extend(TagHero.prototype, 'view', function (vnode) {
      var tag = this.attrs && (this.attrs.model || this.attrs.tag || this.attrs.tagModel);
      if (!tag || !tag.attribute) return;

      var url = tag.attribute('imageUrl') || tag.attribute('backgroundUrl');
      if (!url) return;

      vnode.attrs = vnode.attrs || {};
      vnode.attrs.style = Object.assign({}, vnode.attrs.style, {
        '--tag-hero-image': 'url(' + url + ')',
        'background-image': 'url(' + url + ')',
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
      });
    });
  }

  function register() {
    var compat = flarum.core && flarum.core.compat;
    if (!compat) return;

    var appMod = compat['forum/app'] || compat['common/app'];
    var app = appMod && (appMod.default || appMod);
    if (!app || !app.initializers || !app.initializers.add) return;

    app.initializers.add('nopj-modern-minimal', function () {
      extendTagHero();
    });
  }

  if (typeof module !== 'undefined') {
    module.exports = { default: { register: register } };
  }

  register();
})();
