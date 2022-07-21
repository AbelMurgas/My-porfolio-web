import '../styles/utilities.css';
import '../styles/technologies.css'

const logos = {
 angular: require('../assets/angular-logo.png'),
 dart: require('../assets/dart-logo.png'),
 django: require('../assets/django-logo.png'),
 flask: require('../assets/flask-logo.png'),
 flutter: require('../assets/flutter-logo.png'),
 java: require('../assets/java-logo.png'),
 js: require('../assets/js-logo.png'),
 node: require('../assets/node-logo.png'),
 python: require('../assets/python-logo.png'),
 react: require('../assets/react-logo.png'),
 sprint: require('../assets/sprint-logo.png'),
 tensorflow: require('../assets/Tensorflow-logo.png')
};

export default function Technologies() {
 return (
  <section class="technologies">
   <div class="title-section container">
    <h2>Favorite Technologies I Use</h2>
   </div>
   <div class="lenguage flex-r container">
    <div class="each-lenguage flex-c">
     <div class="lenguage-content card flex-c card-m">
      <div>
       <h3>Python</h3>
      </div>
      <div>
       <img src={logos.python} alt="python" />
      </div>
     </div>
     <div class="framework flex-r flex-wrap">
      <div class="each-framework card card-little flex-c">
       <div>
        <h3>Django</h3>
       </div>
       <div class="">
        <img src={logos.django} alt="django" />
       </div>
      </div>
      <div class="each-framework card card-little flex-c">
       <div>
        <h3>Flask</h3>
       </div>
       <div class="">
        <img src={logos.flask} alt="flask" />
       </div>
      </div>
      <div class="each-framework card card-little flex-c">
       <div>
        <h3>TensorFlow</h3>
       </div>
       <div class="">
        <img src={logos.tensorflow} alt="tensorflow" />
       </div>
      </div>
     </div>
    </div>
    <div class="each-lenguage flex-c">
     <div class="lenguage-content card flex-c card-m">
      <div>
       <h3>Java</h3>
      </div>
      <div class="">
       <img src={logos.java} alt="java" />
      </div>
     </div>
     <div class="framework flex-r flex-wrap flex-top">
      <div class="each-framework card card-little flex-c card-m">
       <div>
        <h3>Spring</h3>
       </div>
       <div>
        <img src={logos.sprint} alt="sprint" />
       </div>
      </div>
     </div>
    </div>
    <div class="each-lenguage flex-c">
     <div class="lenguage-content card flex-c card-m">
      <div>
       <h3>JavaScript</h3>
      </div>
      <div>
       <img src={logos.js} alt="javaScript" />
      </div>
     </div>
     <div class="framework flex-r flex-wrap">
      <div class="each-framework card card-little flex-c">
       <div>
        <h3>React</h3>
       </div>
       <div>
        <img src={logos.react} alt="react" />
       </div>
      </div>
      <div class="each-framework card card-little flex-c">
       <div>
        <h3>Node js</h3>
       </div>
       <div class="">
        <img src={logos.node} alt="node" />
       </div>
      </div>
      <div class="each-framework card card-little flex-c">
       <div>
        <h3>Angular</h3>
       </div>
       <div class="">
        <img src={logos.angular} alt="" />
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="btn-technologies-container container text-center">
    <a href="#" class="btn btn-outline btn-technologies"
    >Other Technologies</a
    >
   </div>
  </section>
 )
}
