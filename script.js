function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  if(html.classList.contains("light") == false){
    html.classList.add("dark")
  } else {
    html.classList.remove("dark")
  }

}
