// ── SOCIAL ICONS ─────────────────────────────────────────────────────────────
const SOCIAL_SVG = {
  'Facebook':    '<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  'Instagram':   '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
  'X (Twitter)': '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  'LinkedIn':    '<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  'YouTube':     '<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  'WhatsApp':    '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
  'TikTok':      '<svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
  'Telegram':    '<svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
  'Pinterest':   '<svg viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .002 5.394.002 12.017c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.621 0 12.015-5.394 12.015-12.017C24.032 5.394 18.638 0 12.017 0z"/></svg>',
  'GitHub':      '<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
};

// ── DEFAULT DATA ──────────────────────────────────────────────────────────────
const DEFAULT = {
  company: {
    name:'BuildCore', tagline:'Construction & Maintenance Specialists',
    heroHeadline:"Building <em>Tomorrow's</em> Infrastructure Today",
    heroSub:'Professional construction and maintenance services delivering excellence across every project — on time, on budget, built to last.',
    aboutP1:'We are a dedicated team of construction and maintenance professionals committed to delivering high-quality results. From groundbreaking to final handover, we bring precision and passion to every project.',
    aboutP2:'Founded on the principles of integrity, craftsmanship, and innovation, we have grown into a trusted partner for clients across residential, commercial, and industrial sectors.',
    aboutTagline:'BUILT\nWITH\nPURPOSE',
    stat1Num:'250+', stat1Label:'Projects Completed',
    stat2Num:'15+',  stat2Label:'Years Experience',
    stat3Num:'98%',  stat3Label:'Client Satisfaction',
    footerCopy:'© 2024 BuildCore Construction & Maintenance. All rights reserved.',
    logo:'',
  },
  contact:{ address:'123 Industrial Avenue, Harare, Zimbabwe', phone:'+263 77 123 4567', email:'info@buildcore.co.zw', hours:'Mon – Fri: 7:00 AM – 5:00 PM' },
  services:[
    {icon:'🏗️',name:'General Construction', desc:'Full-service construction from foundations to finishing — residential, commercial, and industrial builds.'},
    {icon:'🔧',name:'Facility Maintenance',  desc:'Scheduled and emergency maintenance programs to keep your facilities running at peak condition.'},
    {icon:'⚡',name:'Electrical Works',       desc:'Certified electrical installation, upgrades, and fault finding for all building types.'},
    {icon:'🚿',name:'Plumbing & Drainage',    desc:'Complete plumbing systems, pipe installation, drainage solutions, and repairs.'},
    {icon:'🏠',name:'Roofing & Waterproofing',desc:'Durable roofing solutions and professional waterproofing to protect your investment.'},
    {icon:'🎨',name:'Painting & Finishes',    desc:'Interior and exterior painting, plastering, tiling, and decorative finishes.'},
  ],
  projects:[
    {title:'Riverside Office Complex',   category:'Commercial Construction',desc:'A 6-floor office development completed on schedule, featuring modern facade and smart HVAC systems.',img:'',showOnHome:true},
    {title:'Industrial Warehouse Fit-Out',category:'Industrial',            desc:'Complete interior fit-out of a 5,000 m² warehouse including mezzanine floors and loading bays.',img:'',showOnHome:true},
    {title:'School Renovation Project',  category:'Renovation',             desc:'Full refurbishment of a government primary school — classrooms, roofing, plumbing, and painting.',img:'',showOnHome:true},
    {title:'Residential Estate Phase 1', category:'Residential',            desc:'48-unit residential estate from foundation to handover, delivered 2 weeks ahead of schedule.',img:'',showOnHome:true},
  ],
  team:[
    {name:'Robert Ncube',role:'Managing Director', bio:'20+ years in construction management across Southern Africa.',photo:''},
    {name:'Grace Chirwa', role:'Head of Projects',  bio:'Certified project manager with expertise in large-scale builds.',photo:''},
    {name:'David Phiri',  role:'Chief Engineer',    bio:'Structural engineer specialising in commercial and industrial design.',photo:''},
    {name:'Mary Banda',   role:'Client Relations',  bio:'Ensuring seamless communication between clients and our site teams.',photo:''},
  ],
  feedbacks:[
    {name:'Thomas Mwale', rating:5,text:'Exceptional work on our office renovation. Delivered on time and the quality is outstanding. Highly recommend!',response:'Thank you Thomas! It was a pleasure working with you.',approved:true,showOnHome:true,date:new Date().toISOString()},
    {name:'Patricia Zulu',rating:4,text:'Very professional team. Communication could have been slightly better mid-project, but overall great results.',response:'Thank you for the honest feedback, Patricia.',approved:true,showOnHome:true,date:new Date().toISOString()},
  ],
  socials:[
    {platform:'Facebook',   url:'',visible:true},
    {platform:'Instagram',  url:'',visible:true},
    {platform:'X (Twitter)',url:'',visible:true},
    {platform:'LinkedIn',   url:'',visible:true},
    {platform:'YouTube',    url:'',visible:false},
    {platform:'WhatsApp',   url:'',visible:true},
    {platform:'TikTok',     url:'',visible:false},
    {platform:'Telegram',   url:'',visible:false},
    {platform:'Pinterest',  url:'',visible:false},
    {platform:'GitHub',     url:'',visible:false},
  ],
  backgrounds:{
    hero:'#0a0a0a', services:'#1a1a1a', projects:'#0a0a0a',
    team:'#1a1a1a', contact:'#0a0a0a', feedback:'#1a1a1a', footer:'#0a0a0a',
  },
  credentials:{username:'admin',password:'admin123'},
};

// ── STORAGE HELPERS ──────────────────────────────────────────────────────────
function getData(k){ const r=localStorage.getItem('bc_'+k); return r?JSON.parse(r):JSON.parse(JSON.stringify(DEFAULT[k])); }
function setData(k,v){ localStorage.setItem('bc_'+k,JSON.stringify(v)); }

// ── SHARED RENDERERS ─────────────────────────────────────────────────────────
function renderNavLogo(navLogoEl){
  if(!navLogoEl) return;
  const c=getData('company');
  if(c.logo){
    navLogoEl.innerHTML=`<img class="nav-logo-img" src="${c.logo}" alt="${c.name}"/>`;
  } else {
    const half=Math.ceil(c.name.length/2);
    navLogoEl.innerHTML=`<span class="nav-logo-text">${c.name.slice(0,half)}<span>${c.name.slice(half)}</span></span>`;
  }
}

function renderFooterLogo(el){
  if(!el) return;
  const c=getData('company');
  if(c.logo){
    el.innerHTML=`<img class="footer-logo-img" src="${c.logo}" alt="${c.name}"/>`;
  } else {
    const half=Math.ceil(c.name.length/2);
    el.innerHTML=`<span class="footer-logo">${c.name.slice(0,half)}<span>${c.name.slice(half)}</span></span>`;
  }
}

function renderSocials(containerId){
  const el=document.getElementById(containerId);
  if(!el) return;
  const socials=getData('socials');
  const visible=socials.filter(s=>s.visible && s.url);
  if(!visible.length){ el.style.display='none'; return; }
  el.style.display='flex';
  el.innerHTML=visible.map(s=>`
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon" title="${s.platform}">
      ${SOCIAL_SVG[s.platform]||'🔗'}
    </a>`).join('');
}

function applyBackgrounds(){
  const bg=getData('backgrounds');
  const map={'hero':'#hero','services':'#services','projects':'#projects','team':'#team','contact':'#contact','feedback':'#feedback','footer':'footer'};
  Object.entries(map).forEach(([k,sel])=>{
    const el=document.querySelector(sel);
    if(el && bg[k]) el.style.background=bg[k];
  });
}

function observeFadeIns(){
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
  },{threshold:0.1});
  document.querySelectorAll('.fade-in,.slide-in-left').forEach(el=>{el.classList.remove('visible');io.observe(el);});
}

// ── COUNTING ANIMATION ────────────────────────────────────────────────────────
function parseStatVal(v){
  const m=String(v||'0').match(/^([\d.]+)(.*)/);
  return m?{num:parseFloat(m[1]),suffix:m[2].trim()}:{num:0,suffix:String(v)};
}

function animateCount(el,end,suffix,dur=2000){
  let t0=null;
  const tick=(t)=>{
    if(!t0) t0=t;
    const p=Math.min((t-t0)/dur,1);
    const e=1-Math.pow(1-p,3);
    el.textContent=Math.round(e*end)+suffix;
    if(p<1) requestAnimationFrame(tick);
    else el.textContent=end+suffix;
  };
  requestAnimationFrame(tick);
}

function setupStatCounters(){
  const c=getData('company');
  const ids=[['stat-1-num',c.stat1Num],['stat-2-num',c.stat2Num],['stat-3-num',c.stat3Num]];
  let done=false;
  const hero=document.getElementById('hero');
  if(!hero) return;
  const obs=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting && !done){
      done=true;
      ids.forEach(([id,val])=>{
        const el=document.getElementById(id);
        if(!el) return;
        const {num,suffix}=parseStatVal(val);
        animateCount(el,num,suffix);
      });
    }
  },{threshold:0.2});
  obs.observe(hero);
}

// ── HAMBURGER MENU ────────────────────────────────────────────────────────────
function initHamburger(){
  const btn=document.getElementById('hamburger');
  const links=document.getElementById('nav-links');
  if(!btn||!links) return;
  btn.addEventListener('click',()=>{
    btn.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow=links.classList.contains('open')?'hidden':'';
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    btn.classList.remove('open');
    links.classList.remove('open');
    document.body.style.overflow='';
  }));
}

// ── SMOOTH SCROLL (index.html only — same-page anchors) ───────────────────────
function initSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href');
      if(id==='#') return;
      const target=document.querySelector(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
}

// ── IMAGE UPLOAD HELPER ───────────────────────────────────────────────────────
function readFileAsDataURL(file){
  return new Promise((res,rej)=>{
    const r=new FileReader();
    r.onload=e=>res(e.target.result);
    r.onerror=rej;
    r.readAsDataURL(file);
  });
}
