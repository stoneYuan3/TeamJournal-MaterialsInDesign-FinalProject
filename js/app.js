const readFile = (file) => {
  return fetch(file)
    .then(response => response.text());
}

const fileNames = ["articles/w6.txt"];

for (const fileName of fileNames) {
  readFile(fileName)
    .then((fileContent) => {
      const element = document.createElement("p");
      element.textContent = fileContent;
      document.getElementById("w6").appendChild(element)
	});
}


const App=()=>{
	return(
		<div>
			<Header />
			<NavArticle />

			<div class="flex flex-column" id="section-main">
				<SectionArticle id="w6" />
			</div>

		</div>
	);
}

ReactDOM.render(
	<App />
,document.getElementById("root"));