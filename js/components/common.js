const readFile = (file) => {
  return fetch(file)
    .then(response => response.text());
}

// const fileNames = ["articles/w6.txt"];
// const weekList=["w6"];

const fileNames = ["articles/w6.txt","articles/w7.txt"];
const weekList=["w6","w7"];

for (const fileName of fileNames) {
  readFile(fileName)
    .then((fileContent) => {
      // const element = document.createElement("p");
      // element.textContent = fileContent;
      for(let i=0;i<weekList.length;i++){
        document.getElementById(weekList[i]).innerHTML=fileContent
      }

    });
}



const Header=()=>{
  return(
      <header class="flex flex-column">
        <h1>IAT336 Final Project Journal</h1>
        <div class="flex flex-row">
          <p><strong>Team number</strong></p>
          <p>name</p>
          <p>name</p>
          <p>name</p>
          <p>name</p>
        </div>
      </header>
  );
}
const NavArticle=()=>{
  return(
      <nav class="flex flex-row nav-article">
        <a href="#w6">Week 6 (Feb13)</a>
        <a href="#w7">Week 7 (Feb20)</a>
        <a href="#w8">Week 8 (Feb27)</a>       
      </nav>
  );
}

const SectionArticle=(props)=>{
  return(
      <section class="flex flex-column section-article">
        <div class="flex flex-column" id={props.id}>
          
        </div>
      </section>
  );
}