import create from 'zustand';
// 상태와 액션을 정의하는 스토어를 생성
const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

export default useStore
  
