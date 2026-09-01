class PastLifeI18n{
  constructor(){this.langs=['ko','en','ja','es','pt','zh','id','tr','de','fr','hi','ru'];this.lang=this.detect();this.data={}}
  detect(){const q=new URLSearchParams(location.search).get('lang');if(this.langs.includes(q))return q;const saved=localStorage.getItem('past_life_language');if(this.langs.includes(saved))return saved;const browser=(navigator.language||'en').split('-')[0];return this.langs.includes(browser)?browser:'en'}
  async load(lang){try{const r=await fetch(`/past-life/js/locales/${lang}.json`);if(!r.ok)throw Error('locale');this.data[lang]=await r.json();return true}catch(e){if(lang!=='en'){this.lang='en';return this.load('en')}return false}}
  t(key){let v=this.data[this.lang];for(const part of key.split('.'))v=v?.[part];return typeof v==='string'?v:key}
  format(key,values){return Object.entries(values).reduce((s,[k,v])=>s.replaceAll(`{${k}}`,v),this.t(key))}
  async init(){await this.load(this.lang);document.documentElement.lang=this.lang;const select=document.getElementById('language');for(const lang of this.langs)select.add(new Option(this.names[lang],lang));select.value=this.lang;select.addEventListener('change',()=>this.setLanguage(select.value));this.render();this.routes()}
  async setLanguage(lang){if(!this.langs.includes(lang))return;if(!this.data[lang])await this.load(lang);this.lang=lang;localStorage.setItem('past_life_language',lang);document.documentElement.lang=lang;const q=new URLSearchParams(location.search);q.set('lang',lang);history.replaceState(null,'',location.pathname+'?'+q.toString());this.render();this.routes();document.dispatchEvent(new CustomEvent('pastlife:language'))}
  render(){document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=this.t(el.dataset.i18n));document.title=this.t('app.title');document.querySelector('meta[name="description"]').content=this.t('app.description')}
  routes(){document.querySelectorAll('[data-target-slug]').forEach(a=>{const u=new URL(a.href,location.origin);u.searchParams.set('lang',this.lang);a.href=u.pathname+u.search})}
  getCurrentLanguage(){return this.lang}
  get names(){return{ko:'한국어',en:'English',ja:'日本語',es:'Español',pt:'Português',zh:'简体中文',id:'Bahasa Indonesia',tr:'Türkçe',de:'Deutsch',fr:'Français',hi:'हिन्दी',ru:'Русский'}}
}
window.i18n=new PastLifeI18n();
