import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import I18n from '_app/i18n/index';
import { TailwindProvider } from '_app/store/useTheme';
import AppContainer from './appContainer';

const App = () => {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={I18n}>
        <Suspense fallback={null}>
          <TailwindProvider>
            <AppContainer />
          </TailwindProvider>
        </Suspense>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default App;
