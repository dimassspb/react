const style1 = {
  backgroundImage: 'url(./images/1.svg)',
};
const style2 = {
  backgroundImage: 'url(./images/2.svg)',
};
const style3 = {
  backgroundImage: 'url(./images/3.svg)',
};
const style4 = {
  backgroundImage: 'url(./images/4.svg)',
};
function Component(props) {
  return (
    <div className="features-slider_item">
      <div className="features-img" style={props.style}></div>
      <div className="features-feature">{props.text}</div>
    </div>
  );
}
const App = (
  <div>
    <Component text="Первое целевое преимущество" style={style1} />
    <Component text="Второе целевое преимущество" style={style2} />
    <Component text="Третье целевое преимущество" style={style3} />
    <Component text="Четвертое целевое преимущество" style={style4} />
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
