
const App=()=>{
	return(
		<div>
			<Header />
			<NavArticle />

			<div class="flex flex-column" id="section-main">
				<SectionArticle id="w6" />
				<SectionArticle id="w7" />
			</div>

		</div>
	);
}

ReactDOM.render(
	<App />
,document.getElementById("root"));


// for(let i=0;i<weekList.length;i++){
// 	document.getElementById("section-main").appendChild(<SectionArticle id={weekList[i]} />)
// }
