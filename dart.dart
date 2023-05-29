import 'package:flutter_driver/flutter_driver.dart';
import 'package:test/test.dart';

void main() {
  FlutterDriver driver;

  setUpAll(() async {
    // Launch the Flutter app
    driver = await FlutterDriver.connect();
  });

  tearDownAll(() async {
    // Close the connection to the Flutter app
    if (driver != null) {
      driver.close();
    }
  });

  test('Verify button presence', () async {
    // Find the button using the Flutter Driver's API
    final buttonFinder = find.byValueKey('button_key');

    // Verify the presence of the button
    expect(await driver.getText(buttonFinder), 'Button Text');
  });
}
