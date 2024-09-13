# Padding regression on RNGH buttons in new arch on iOS

- Install packages with `yarn`
- Run `npx expo run:ios` and pick a platform to test
- You can verify that the issue exists
- To try it on old arch, open **app.json** and change the **newArchenabled** flag to false for the target platform. Run `npx expo prebuild -p ios --clean` and then `npx expo run:ios` again.