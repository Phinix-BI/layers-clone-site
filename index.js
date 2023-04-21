document.querySelector('.fa').addEventListener("click", function(){
  var val = this.innerHTML;
document.querySelector(".news").classList.add("hideAll");
var elements = document.getElementsByClassName("icon-pos");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.position = "absolute";
  elements[i].style.top = "33px";
}
});
//searching

const search = () =>{
    const searchbox = document.getElementById("product-search").value.toUpperCase();
 
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    
    const pname = storeitems.getElementsByTagName("h6");
    const maxDisplayCount = 3;
    let resultFound = false;
// If search box is empty, remove the "displayme" class from all products
if (searchbox === "") {
    product.forEach((p) => p.classList.remove("displayme"));
    document.querySelector(".shown-result").classList.remove("show-result");
    return;
  }
  let matchCount = 0; 
    for(var i=0;i<pname.length;i++){
        let match = product[i].getElementsByTagName('h6')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML;
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                document.querySelector(".shown-result").classList.remove("show-result");
                if (matchCount < maxDisplayCount) { // if we haven't reached the max display count
                    product[i].style.display = "";
                    document.querySelectorAll(".product")[i].classList.add("displayme");
                    
                    matchCount++;
                  }
                  else{
                    product[i].style.display = "none";
                    
                }
                resultFound=true;
            }
          
            else{
                product[i].style.display = "none";
               
            }
        }
    
    }
    if (resultFound) {
        document.querySelector(".shown-result").classList.remove("show-result");
      } else {
        document.querySelector(".shown-result").classList.add("show-result");
        
      }
   
}

