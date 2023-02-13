

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
      <section id={props.id} class="flex flex-column section-article">
        {props.content}
      </section>
  );
}