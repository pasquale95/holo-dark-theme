local M = {}

M.defaults = { port = 8080, host = "localhost" }

function M.new(opts)
  local self = setmetatable({}, { __index = M })
  self.opts = vim.tbl_extend("force", M.defaults, opts or {})
  return self
end

function M:start()
  for k, v in pairs(self.opts) do
    print(string.format("%s = %s", k, tostring(v)))
  end
end

return M

-- Line comment
--[[ Block comment
     spanning lines ]]
