class Api::TaskResource < JSONAPI::Resource
	attributes :title, :note, :completed, :deadline
end
