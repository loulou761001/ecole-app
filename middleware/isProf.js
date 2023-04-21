export default function ({ store, redirect }) {
  if (store.state.auth.user.role !== 'prof') {
    return redirect('/')
  }
}
