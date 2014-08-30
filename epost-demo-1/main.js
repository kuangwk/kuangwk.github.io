function ModuleGenerator () {
  this.$main = $('main');
  this.main = this.$main[0];
}

ModuleGenerator.prototype.setLoading = function(tpl, css) {
  var $loadingSec = this.$main.find('#loading');
  clearPreLoading($loadingSec, 'css-loading')
  appendPageToSection($loadingSec, tpl);
  loadCss(css, 'css-loading');
};

ModuleGenerator.prototype.setOpenPage = function (tpl, css) {
  appendPageToMain(this.$main,'#open-page', tpl);
  loadCss(css)
}

function clearPreLoading ($section, id) {
}

function appendPageToMain($section, tpl) {
  $section.append(tpl);
}

function loadCss(cssFile, id) {
  if (!cssFile) {return};
  var fileref=document.createElement("link")
  fileref.rel = "stylesheet";
  fileref.type = "text/css";
  fileref.href = 'style/' + cssFile + '.css';
  fileref.media="screen";
  if (id) {
    fileref.id = id;
  }
  var headobj = document.getElementsByTagName('head')[0];
  headobj.appendChild(fileref); 
}

mg = new ModuleGenerator()

var loadingTpl = '<h1>keke</h1>'
var openPageTpl = '<h1>openPage</h1>'


mg.setLoading(loadingTpl, 'loading');
mg.setOpenPage(openPageTpl )