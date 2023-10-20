const testimonial = document.querySelector(".hm3con");

const testArr = [
  "Mike once didnt give me any change, because he was not carrying any. But he was polite about it ... Unknown",
  "10/10 would recommend, one of my favourite sons ... Mikes Mum",
  "I dont bloody know if its working, he said if you press this button then I could just say what I want rather than typing it out. Hes useless that boy, couldnt find his ar ... Mikes Dad",
  "I once watched Mike feel really bad about standing on a snail ... neighbour",
  "You wont find a better Mike on this page, guaranteed ... Mike, page author",
];

testimonial.addEventListener("click", function () {
  const rand = Math.floor(Math.random() * 4);
  testimonial.textContent = testArr[rand];
});
