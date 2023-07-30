const main = document.querySelector('main');

const joke1 = "Why was the math book sad? Because it had too many problems.";
const joke2 = "Why did the scarecrow win an award? Because he was outstanding in his field.";
const joke3 = "Why did the cookie go to the doctor? Because it was feeling crumbly.";

const jokesTemplate = `
	<h1>My Jokes</h1>
	<ul>
		<li>${joke1}</li>
		<li>${joke2}</li>
		<li>${joke3}</li>
	</ul>
`;

main.innerHTML = jokesTemplate;

const paragraph = document.createElement('p');
paragraph.textContent = "That's all folks!";
document.body.appendChild(paragraph);