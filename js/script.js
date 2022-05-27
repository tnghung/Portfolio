const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');
const btnsFilter = document.querySelectorAll('.btn--filter');
const navBarLinks = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');
const menu = document.querySelector('#menu-bars');
const header = document.querySelector('header');

// Menu
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  header.classList.remove('active');
};

// Custom cursor
window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
};

document.querySelectorAll('a').forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add('active');
    cursor2.classList.add('active');
  };

  links.onmouseleave = () => {
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');
  };
});

document.querySelector('.btn--form').onmouseenter = () => {
  cursor1.classList.add('active');
  cursor2.classList.add('active');
};

document.querySelector('.btn--form').onmouseleave = () => {
  cursor1.classList.remove('active');
  cursor2.classList.remove('active');
};

btnsFilter.forEach((btn) => {
  btn.onmouseenter = () => {
    cursor1.classList.add('active');
    cursor2.classList.add('active');
  };

  btn.onmouseleave = () => {
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');
  };
});

// Custom filter
filterSelection('all');

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName('filterDiv');
  if (c === 'all') c = '';

  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

addActiveClass(btnsFilter);

addActiveClass(navBarLinks);

function addActiveClass(ele) {
  ele.forEach((val) => {
    val.addEventListener('click', () => {
      removeAllActiveClass(ele);
      val.classList.add('active');
    });
  });
}

function removeAllActiveClass(ele) {
  ele.forEach((val) => val.classList.remove('active'));
}

// Revealling Section Animation
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  removeAllActiveClass(navBarLinks);
  const navLink = document.querySelector(`.navbar__link[data-nav=${entry.target.id}]`);
  navLink.classList.add('active');
  entry.target.classList.remove('section--hidden');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

sections.forEach((section) => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});
