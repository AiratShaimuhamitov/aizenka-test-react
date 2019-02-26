import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import moduleName from './result-section-style.css'

export default class ResultSection extends Component {
	
	constructor(props) {
		super(props)
		
		const answers = props.answers
		
		console.log(answers);

		const alpha = this.getAlpha(answers)
		const beta = this.getBeta(answers)
		const gamma = this.getGamma(answers)

		console.log(alpha, beta, gamma)

		//const a = 1.0
		//const x = -1.2
		//const y = -1.4

		const a = this.getA(alpha)
		const x = this.getX(beta)
		const y = this.getY(gamma)

		console.log(a, x, y)
 
		this.state = {
			appearSection: true,
			result: "Во время выполнения теста выснилось, что " + this.getResultForA(a) 
			+ ". Однозначно ты - " + this.getResultForX(x) 
			+ " и в тебе преобладает такое качество, как " + this.getResultForY(y)
			+ ". И самое главное, мы выяснили твой тип темперамента, поздравляю, ты - " + this.getPersonType(x, y) + ".",
			wikiLink: "https://ru.wikipedia.org/wiki/" + this.getPersonType(x, y)
		}
	}

	getResultForA(a) {
		if (a < -1) return "ты показал повышенную взыскательность в оценке собственных качеств"
		if (a > 1) return "у тебя есть желание приукрасить себя"
		return "твои ответы в основном не отличаются от ответов большинства протестированных"
	}

	getResultForX(x) {
		if (x > 0) return "экстраверт"
		return "интроверт"
	}

	getResultForY(y) {
		if (y > 0) return "эмоциональная неустойчивость"
		return "спокойствие"
	}

	getPersonType(x, y) {
		if(x > 0, y > 0) return 'Холерик'
		if(x > 0, y < 0) return 'Сангвиник'
		if(x < 0, y < 0) return 'Флегматик'
		if(x < 0, y > 0) return 'Меланхолик'
	}

	getA(value) {
		if(value === 0) return -2.3;
		if(value === 1) return -1.8;
		if(value === 2) return -1.2;
		if(value === 3) return -0.7;
		if(value === 4) return -0.1;
		if(value === 5) return 0.4;
		if(value === 6) return 1.0;
		if(value === 7) return 1.6;
		if(value === 8) return 1.9;
		if(value === 9) return 2.1;
		if(value === 10) return 2.5;
	}

	getX(value) {
		if(value === 0) return -2.5;
		if(value === 1) return -2.2;
		if(value === 2) return -2.0;
		if(value === 3) return -1.8;
		if(value === 4) return -1.5;
		if(value === 5) return -1.3;
		if(value === 6) return -1.1;
		if(value === 7) return -0.9;
		if(value === 8) return -0.6;
		if(value === 9) return -0.4;
		if(value === 10) return -0.2;
		if(value === 11) return 0;
		if(value === 12) return 0.3;
		if(value === 13) return 0.5;
		if(value === 14) return 0.7;
		if(value === 15) return 1.0;
		if(value === 16) return 1.2;
		if(value === 17) return 1.4;
		if(value === 18) return 1.6;
		if(value === 19) return 1.9;
		if(value === 20) return 2.1;
		if(value === 21) return 2.3;
		if(value === 22) return 2.5;
		if(value === 23) return 2.8;
		if(value === 24) return 3.0;
	}

	getY(value) {
		if(value === 0) return -1.5;
		if(value === 1) return -1.3;
		if(value === 2) return -1.1;
		if(value === 3) return -0.8;
		if(value === 4) return -0.6;
		if(value === 5) return -0.4;
		if(value === 6) return -0.2;
		if(value === 7) return 0.1;
		if(value === 8) return 0.3;
		if(value === 9) return 0.6;
		if(value === 10) return 0.8;
		if(value === 11) return 1.0;
		if(value === 12) return 1.2;
		if(value === 13) return 1.4;
		if(value === 14) return 1.7;
		if(value === 15) return 1.9;
		if(value === 16) return 2.1;
		if(value === 17) return 2.3;
		if(value === 18) return 2.6;
		if(value === 19) return 2.8;
		if(value === 20) return 3.0;
		if(value === 21) return 3.3;
		if(value === 22) return 3.5;
		if(value === 23) return 3.7;
		if(value === 24) return 3.9;
	}

	getAlpha(answers) {
		var equals = 0;

		if (answers[5] === true) equals++;
		if (answers[12] === false) equals++;
		if (answers[18] === false) equals++;
		if (answers[24] === true) equals++;
		if (answers[30] === false) equals++;
		if (answers[36] === false) equals++;
		if (answers[42] === false) equals++;
		if (answers[48] === false) equals++;
		if (answers[52] === false) equals++;

		return equals;
	}

	getBeta(answers) {
		var equals = 0;
		if (answers[1] === true) equals++;
		if (answers[3] === true) equals++;
		if (answers[5] === false) equals++;
		if (answers[8] === true) equals++;
		if (answers[10] === true) equals++;
		if (answers[13] === true) equals++;
		if (answers[15] === false) equals++;
		if (answers[17] === true) equals++;
		if (answers[20] === false) equals++;
		if (answers[22] === true) equals++;

		if (answers[25] === true) equals++;
		if (answers[27] === true) equals++;
		if (answers[29] === false) equals++;
		if (answers[32] === false) equals++;
		if (answers[34] === false) equals++;
		if (answers[37] === false) equals++;
		if (answers[39] === true) equals++;
		if (answers[41] === false) equals++;
		if (answers[44] === true) equals++;
		if (answers[46] === true) equals++;

		if (answers[49] === true) equals++;
		if (answers[51] === false) equals++;
		if (answers[53] === true) equals++;
		if (answers[56] === true) equals++;
		return equals;
	}

	getGamma(answers) {
		var equals = 0;

		if (answers[2] === true) equals++;
		if (answers[4] === true) equals++;
		if (answers[7] === true) equals++;
		if (answers[9] === true) equals++;
		if (answers[11] === true) equals++;
		if (answers[14] === true) equals++;
		if (answers[16] === true) equals++;
		if (answers[19] === true) equals++;
		if (answers[21] === true) equals++;
		if (answers[23] === true) equals++;

		if (answers[26] === true) equals++;
		if (answers[28] === true) equals++;
		if (answers[31] === true) equals++;
		if (answers[33] === true) equals++;
		if (answers[35] === true) equals++;
		if (answers[38] === true) equals++;
		if (answers[40] === true) equals++;
		if (answers[43] === true) equals++;
		if (answers[45] === true) equals++;
		if (answers[47] === true) equals++;
		
		if (answers[50] === true) equals++;
		if (answers[52] === true) equals++;
		if (answers[55] === true) equals++;
		if (answers[57] === true) equals++;

		return equals;
	}

  render() {
    return (
      <div className="result-section">
        <CSSTransition
          in={this.state.appearSection}
          appear={true}
          timeout={3000}
          classNames="fade-lable"
        >
          <div className="result-label">
              <p>Ну что, давай посмотрим твои результаты..</p>
          </div>
        </CSSTransition>
				<CSSTransition
          in={this.state.appearSection}
          appear={true}
          timeout={3000}
          classNames="fade-text"
        >
          <div className="result-text">
						{this.state.result}
						<p>Подробнее можешь почитать в <a href={this.state.wikiLink}>википедии</a>.</p>
          </div>
        </CSSTransition>
      </div>
    )
  }
}
