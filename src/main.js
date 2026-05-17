import './style.css';
import heroArt from '../Image/dede-beach-profile.jpeg';

const profile = {
  nickname: 'ดีดี',
  firstName: 'จิรกิตติ์',
  lastName: 'วงศ์ศรีเพ็ง',
  alias: 'ด๋อยเด๋าดึ๋ง',
  instagram: 'inndeed',
  film: '15+ IQ กระฉูด',
  role: 'โอบื้อ',
  summary:
    'นักแสดงไทยที่เป็นที่รู้จักจากบทโอบื้อในภาพยนตร์ 15+ IQ กระฉูด พร้อมภาพจำของคนรุ่นใหม่ที่ตั้งใจเรียน ชอบบาสเกตบอล และเล่นกีตาร์',
};

const sources = [
  {
    label: 'Daradaily: เปิดประวัติ ดีดี หรือ โอบื้อ ใน 15+ ไอคิวกระฉูด',
    href: 'https://www.daradaily.com/news/63832/read',
  },
  {
    label: 'Content Thailand: จิรกิตติ์ วงศ์ศรีเพ็ง',
    href: 'https://contentthailand.com/th/person/%E0%B8%88%E0%B8%B4%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%B4%E0%B9%8C-%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B9%8C%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%9E%E0%B9%87%E0%B8%87/',
  },
];

document.querySelector('#app').innerHTML = `
  <main class="site-shell">
    <nav class="topbar" aria-label="หลัก">
      <a class="brand" href="#hero" aria-label="กลับไปด้านบน">
        <span class="brand-mark">IN</span>
        <span>Inndeed</span>
      </a>
      <div class="nav-actions">
        <a href="https://www.instagram.com/${profile.instagram}/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/search?q=${encodeURIComponent(profile.alias)}" target="_blank" rel="noreferrer">TikTok</a>
      </div>
    </nav>

    <section class="hero" id="hero">
      <div class="hero-copy">
        <p class="eyebrow">Actor profile / 3D motion</p>
        <h1 class="profile-name" aria-label="${profile.nickname} ${profile.firstName} ${profile.lastName}">
          <span>${profile.nickname}</span>
          <span>${profile.firstName}</span>
          <span>${profile.lastName}</span>
        </h1>
        <p class="lead">${profile.summary}</p>
        <div class="hero-actions" aria-label="ช่องทางติดตาม">
          <a class="primary-button" href="https://www.instagram.com/${profile.instagram}/" target="_blank" rel="noreferrer">@${profile.instagram}</a>
          <a class="ghost-button" href="https://www.tiktok.com/search?q=${encodeURIComponent(profile.alias)}" target="_blank" rel="noreferrer">${profile.alias}</a>
        </div>
      </div>

      <div class="stage" aria-label="ภาพเคลื่อนไหวสามมิติ">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="profile-card">
          <div class="portrait" style="--portrait-art: url('${heroArt}')">
            <span>D</span>
          </div>
          <div class="card-lines">
            <span>${profile.film}</span>
            <strong>${profile.role}</strong>
            <small>Bangkok talent / cinema debut</small>
          </div>
        </div>
        <div class="floating-tag tag-one">Basketball</div>
        <div class="floating-tag tag-two">Guitar</div>
        <div class="floating-tag tag-three">15+ IQ</div>
      </div>
    </section>

    <section class="content-grid" aria-label="ข้อมูลโปรไฟล์">
      <article>
        <span class="section-kicker">Known for</span>
        <h2>บท “โอบื้อ” จาก ${profile.film}</h2>
        <p>ข้อมูลจาก Daradaily ระบุว่า ดีดีได้รับบทโอบื้อในภาพยนตร์เรื่องแรก หลังมีโอกาสแคสติ้งจากทีมงานที่ไปหานักแสดงที่โรงเรียน</p>
      </article>
      <article>
        <span class="section-kicker">Personality</span>
        <h2>เนิร์ด ขยัน และสายกิจกรรม</h2>
        <p>บทความเดียวกันเล่าว่าเขาเติบโตในกรุงเทพฯ สนใจการเรียน เล่นบาสเกตบอล เล่นกีตาร์ และมีประสบการณ์กิจกรรมในโรงเรียน</p>
      </article>
      <article>
        <span class="section-kicker">Social</span>
        <h2>พื้นที่ติดตาม</h2>
        <p>ใช้แฮนด์เดิลที่คุณให้มา: TikTok “${profile.alias}” และ Instagram “@${profile.instagram}” พร้อมลิงก์ออกไปยังแพลตฟอร์มโดยตรง</p>
      </article>
    </section>

    <section class="timeline" aria-label="ไทม์ไลน์">
      <div>
        <span>01</span>
        <p>ถูกค้นพบจากแวดล้อมโรงเรียนและเข้าสู่การแคสติ้ง</p>
      </div>
      <div>
        <span>02</span>
        <p>เปิดตัวในภาพยนตร์วัยรุ่นคอมเมดี้ ${profile.film}</p>
      </div>
      <div>
        <span>03</span>
        <p>ต่อยอดตัวตนบนโลกออนไลน์ผ่าน Instagram และ TikTok</p>
      </div>
    </section>

    <footer>
      <p>ข้อมูลสรุปจากแหล่งสาธารณะและแฮนด์เดิลที่ผู้ใช้ให้มา</p>
      <div>
        ${sources.map((source) => `<a href="${source.href}" target="_blank" rel="noreferrer">${source.label}</a>`).join('')}
      </div>
    </footer>
  </main>
`;

const stage = document.querySelector('.stage');

window.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 24;
  const y = (event.clientY / window.innerHeight - 0.5) * -18;
  stage?.style.setProperty('--tilt-x', `${y}deg`);
  stage?.style.setProperty('--tilt-y', `${x}deg`);
});
