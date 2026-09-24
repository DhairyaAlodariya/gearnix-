export default function initUtilityPanel() {
  const overlay=document.querySelector('.utility-overlay');
  const panels={search_canvas:document.getElementById('searchCanvas'),header_settings:document.getElementById('headerSettingsPanel')};
  const triggers=Array.from(document.querySelectorAll('.nov_btn_act[data-toggle="search_canvas"],.nov_btn_act[data-toggle="header_settings"]'));
  const closeButtons=Array.from(document.querySelectorAll('[data-utility-close]'));
  const searchInput=document.getElementById('utilitySearchInput');
  let activePanel=null;
  if(!overlay||!triggers.length) return;
  const closePanels=()=>{Object.values(panels).forEach(p=>{if(!p)return;p.classList.remove('is-open');p.setAttribute('aria-hidden','true');});overlay.classList.remove('is-open');overlay.hidden=true;document.body.classList.remove('utility-panel-open');activePanel=null;};
  const openPanel=key=>{const panel=panels[key];if(!panel)return;Object.values(panels).forEach(item=>{if(!item)return;item.classList.toggle('is-open',item===panel);item.setAttribute('aria-hidden',item===panel?'false':'true');});overlay.hidden=false;overlay.classList.add('is-open');document.body.classList.add('utility-panel-open');activePanel=panel;if(key==='search_canvas'&&searchInput)window.requestAnimationFrame(()=>searchInput.focus());};
  triggers.forEach(t=>{t.addEventListener('click',e=>{e.preventDefault();const target=t.getAttribute('data-toggle');if(activePanel&&panels[target]===activePanel){closePanels();return;}openPanel(target);});});
  closeButtons.forEach(b=>b.addEventListener('click',closePanels));
  window.addEventListener('keydown',e=>{if(e.key==='Escape'&&activePanel)closePanels();});
}