import { React, View, BackButton } from 'reapp-kit';

export default class extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />;

    return (
      <View {...this.props} title="Sub Route" titleLeft={backButton}>
        <p>Hello, Kasia!</p>
      </View>
    );
  }
}