import 'dart:async';

/// pseudo code
void main() {
  List<String> ids = [];
  DateTime startTime = DateTime.now();
  int index = 0;

  Timer.periodic(Duration(seconds: 60), (timer) {
    if (index <= ids.length) {
      DateTime updatedTime = getLastUpdatedTime();
      if (updatedTime.difference(startTime).inHours > 23) {
        getPrice(ids[index]);

        addNewPriceInDatabase();
      }
    }

    if (index == ids.length - 1) {
      timer.cancel();
    }
  });
}

getPrice(String id) {}

DateTime getLastUpdatedTime() {
  return DateTime.now();
}

addNewPriceInDatabase() {}
