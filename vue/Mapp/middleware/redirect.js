export default function ({ isHMR, route, redirect}) {
  if (isHMR) return
  if (route.fullPath === '/film') {
    return redirect('/film/nowplaying')
  }
}
