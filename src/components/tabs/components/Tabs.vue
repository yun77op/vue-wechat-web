<template>
    <div class="tabs-component">
      <ul role="tablist" class="tabs-component-tabs">
            <li
                v-for="(tab, i) in tabs"
                :key="i"
                :class="{ 'is-active': tab.isActive, 'is-disabled': tab.isDisabled }"
                class="tabs-component-tab"
                role="presentation"
                v-show="tab.isVisible"
                   @click="selectTab(tab.hash, $event)"
            >{{tab.header}}
            </li>
        </ul>
        <div class="tabs-component-panels">
             <slot/>
        </div>
    </div>
</template>

<script>
    // import expiringStorage from '../expiringStorage';
    export default {
        props: {
            // cacheLifetime: {
            //     default: 5,
            // },
            // options: {
            //     type: Object,
            //     required: false,
            //     default: () => ({
            //         useUrlFragment: true,
            //     })
            // },
        },
        data: function() {
          return {
            tabs: [],
            activeTabHash: '',
          }
        },
        // computed: {
            // storageKey() {
            //     return `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`;
            // },
        // },

        created() {


        },

        mounted() {
            // const previousSelectedTabHash = expiringStorage.get(this.storageKey);
            // if (this.findTab(previousSelectedTabHash)) {
            //     this.selectTab(previousSelectedTabHash);
            //     return;
            // }

            this.tabs = this.$children.map((child) => {
              return {
                isActive: child.isActive,
                isDisabled: child.isDisabled,
                isVisible: child.isVisible,
                hash: child.hash,
                header: child.header
              }
            });

            this.selectTab(this.tabs[0].hash);
        },
        methods: {
            findTab(hash) {
                return this.tabs.find(tab => tab.hash === hash);
            },
            selectTab(selectedTabHash, event) {
                // See if we should store the hash in the url fragment.
                // if (event && !this.options.useUrlFragment) {
                //     event.preventDefault();
                // }


                const selectedTab = this.findTab(selectedTabHash);
                if (! selectedTab) {
                    return;
                }
                if (selectedTab.isDisabled) {
                    return;
                }

                this.tabs.forEach((tab, index) => {
                    this.$children[index].isActive = (tab.hash === selectedTab.hash);
                });

                // this.$emit('changed', { tab: selectedTab });
                this.activeTabHash = selectedTab.hash;
                // expiringStorage.set(this.storageKey, selectedTab.hash, this.cacheLifetime);
            },
            setTabVisible(hash, visible) {
                const tab = this.findTab(hash);
                if (! tab) {
                    return;
                }
                tab.isVisible = visible;
                if (tab.isActive) {
                    // If tab is active, set a different one as active.
                    tab.isActive = visible;
                    this.tabs.every((tab, index, array) => {
                        if (tab.isVisible) {
                            tab.isActive = true;
                            return false;
                        }
                        return true;
                    });
                }
            },
        },
    };
</script>


<style scoped>
.tabs-component {
  width: 100%;
}
.tabs-component-tabs {
  display: flex;
  width: 100%;
  padding-left: 0;
}

.tabs-component-tab {
  flex-grow: 1;
  list-style: none;
}
</style>
