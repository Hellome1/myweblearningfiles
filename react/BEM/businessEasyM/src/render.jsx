export const render = root => {
  console.log('render');
  root.render(
    <React.StrictMode>
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
    </React.StrictMode>,
  )
}