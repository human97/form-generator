import { createStore } from 'vuex';

export default createStore({
  state: {
    // Здесь могло бы быть состояние, например, пользовательские данные
    // которые мы бы использовали для предзаполнения формы
    userProfile: {
      name: 'Иван Петров',
      email: 'ivan.petrov@example.com',
      department: 'dev',
      subscribe: true,
      bio: 'Старший разработчик с 5-летним опытом.'
    }
  },
  mutations: {
    updateUserProfile(state, payload) {
      state.userProfile = { ...state.userProfile, ...payload };
    }
  },
  actions: {
    // Здесь могли бы быть асинхронные запросы для получения или сохранения данных
    async saveProfile({ commit }, profileData) {
      console.log('[Vuex Action] Saving profile:', profileData);
      // Имитация запроса к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      commit('updateUserProfile', profileData);
      console.log('[Vuex Action] Profile saved!');
      return true;
    }
  },
  getters: {
    userProfile: state => state.userProfile
  }
});