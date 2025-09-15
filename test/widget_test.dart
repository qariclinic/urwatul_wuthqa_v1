import 'package:flutter_test/flutter_test.dart';
import 'package:urwatul_wuthqa_v1_mobile/main.dart';

void main() {
  testWidgets('App starts with home screen', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    expect(find.text("Urwatul Wuthqa App"), findsOneWidget);
  });
}
