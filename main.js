const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
  type: 'line',
  data: {
    labels: [
      'Jan', 'Jeb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Now'
    ],
    datasets: [
      {
        label: 'BTC',
        data: [23235, 43244, 54324, 63244, 74342, 84332,94342, 114543,122542,134524,114524,115242],
        borderColor: 'red',
        borderWidth: 2
      },
      {
        label: 'ETH',
        data: [3231, 6222, 11234, 9323, 12245,22233,25555, 33553,26434,5344,6343],
        borderColor: 'blue',
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true
  }
})

// show or hide sidebar
// const menuBtn = document.querySelector('#menu-btn');
// const closeBtn = document.querySelector('#close-btn');
// const sidebar = document.querySelector('aside');

// menuBtn.addEventListener('click', () => {
//   sidebar.style.display = 'block';
// })

// menuBtn.addEventListener('click', () => {
//   sidebar.style.display = 'none';
// })
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
  sidebar.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sidebar.style.display = 'none';
});


// charge theme
// const themeBtn = document.querySelector('theme-btn');

// themeBtn.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme');

//   themeBtn.querySelector('span:fist-child').classList.toggle('active');
//   themeBtn.querySelector('span:last-child').classList.toggle('active');

// })
// Lấy tham chiếu đến phần tử nút chuyển đổi chủ đề
const themeBtn = document.querySelector('.theme-btn');

// Thêm sự kiện click cho nút chuyển đổi chủ đề
themeBtn.addEventListener('click', () => {
  // Thêm hoặc xóa lớp 'dark-theme' trên phần tử body để thay đổi chủ đề
  document.body.classList.toggle('dark-theme');

  // Lấy tham chiếu đến hai phần tử con span trong nút chuyển đổi chủ đề
  const firstSpan = themeBtn.querySelector('span:first-child');
  const lastSpan = themeBtn.querySelector('span:last-child');

  // Thêm hoặc xóa lớp 'active' trên hai phần tử span để thay đổi trạng thái của chúng
  firstSpan.classList.toggle('active');
  lastSpan.classList.toggle('active');
});

// chạm màn hình để đóng sidebar
const otherSidebar = document.querySelector('aside');
const content = document.querySelector('.content');

// Lắng nghe sự kiện touchstart trên phần tử content
content.addEventListener('touchstart', (e) => {
  // Nếu sự kiện touchstart được kích hoạt trên một vị trí bên ngoài của sidebar, thì đóng sidebar
  if (sidebar.style.display === 'block' && !sidebar.contains(e.target)) {
    sidebar.style.display = 'none';
  }
});
