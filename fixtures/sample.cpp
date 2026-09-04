#include <memory>
#include <string>
#include <vector>

namespace app {

template <typename T>
class Registry {
public:
    void add(std::unique_ptr<T> item) { items_.push_back(std::move(item)); }
    std::size_t size() const noexcept { return items_.size(); }

private:
    std::vector<std::unique_ptr<T>> items_;
};

}  // namespace app

int main() {
    app::Registry<int> r;
    r.add(std::make_unique<int>(42));
    return static_cast<int>(r.size());
}

// Line comment
/* Block comment
   spanning lines */
/// Doxygen comment for Registry
