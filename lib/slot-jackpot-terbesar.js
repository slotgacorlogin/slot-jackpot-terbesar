'use babel';

import SlotJackpotTerbesarView from './slot-jackpot-terbesar-view';
import { CompositeDisposable } from 'atom';

export default {

  slotJackpotTerbesarView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slotJackpotTerbesarView = new SlotJackpotTerbesarView(state.slotJackpotTerbesarViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slotJackpotTerbesarView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-jackpot-terbesar:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slotJackpotTerbesarView.destroy();
  },

  serialize() {
    return {
      slotJackpotTerbesarViewState: this.slotJackpotTerbesarView.serialize()
    };
  },

  toggle() {
    console.log('SlotJackpotTerbesar was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
