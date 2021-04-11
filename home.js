var firebaseConfig = {
  apiKey: "AIzaSyA2GCttbQ6PrO6Z3bgEPfC0j-xy-e1HHJA",
  authDomain: "dataforarticles.firebaseapp.com",
  databaseURL: "https://dataforarticles-default-rtdb.firebaseio.com",
  projectId: "dataforarticles",
  storageBucket: "dataforarticles.appspot.com",
  messagingSenderId: "942550932389",
  appId: "1:942550932389:web:df0d53541d98e1aa62264c",
  measurementId: "G-VCXQG5WLCJ"
};

Law = [];
Politics = [];
Book = []
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.database().ref("/").on('value', function (Snapshot) {
  Snapshot.forEach(function (childSnapshot) {
    val = childSnapshot.val();
    keys = childSnapshot.key;
    console.log(keys);
    get_article = val["content"]
    get_date = val["date"]
    get_category = val["category"]
    get_name = val["name"];
    get_home = val["home"];
    get_image = val["image"];
    console.log(get_date);
    console.log(get_home)
    console.log("val", val);
    console.log(get_category)
    obj = {};
    switch (get_category) {
      case ("Law"):
        obj[get_name] = get_article
        Law.push(obj)
      case ("Politics"):
        obj[get_name] = get_article
        Politics.push(obj);
      case ("Book"):
        obj[get_name] = get_article
        Book.push(obj);
    }
    if (get_home == "y") {
      line = "<a class='art' name='" + get_article + "'onclick=nav(this.name,'" + get_category + "')>" + "<img src='" + get_image + "'>" + get_name + "</a><br>";
      document.getElementById("Home").innerHTML += line;
    }
    if (get_category == "Law") {
      line = "<a class='art' name='" + get_article + "'onclick=nav(this.name,'" + get_category + "')>" + "<img src='" + get_image + "'>" + get_name + "</a><br>";
      document.getElementById("Law").innerHTML+=line;
    }
    if (get_category == "Politics") {
      line = "<a class='art' name='" + get_article + "'onclick=nav(this.name,'" + get_category + "')>" + "<img src='" + get_image + "'>" + get_name + "</a><br>";
      document.getElementById("Politics").innerHTML += line;
    }

    if (get_category == "Book") {
      line = "<a class='art' name='" + get_article + "'onclick=nav(this.name,'" + get_category + "')>" + "<img src='" + get_image + "'>" + get_name + "</a><br>";
      document.getElementById("Book").innerHTML += line;
    }
    console.log(Law)
    localStorage.setItem("Law", JSON.stringify(Law));
    localStorage.setItem("Politics", JSON.stringify(Politics));
    localStorage.setItem("Book", JSON.stringify(Book));
  });
});

function nav(html, cat) {
  localStorage.setItem("art", html);
  localStorage.setItem("cat", String(cat));
  window.location = "article.html";
}