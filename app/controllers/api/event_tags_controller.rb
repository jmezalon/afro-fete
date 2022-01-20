class Api::EventTagsController < ApplicationController
    before_action :find_event, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:index, :show, :create]

    def index
        render json: EventTag.all, status: :ok
    end

    def show
        render json: @eventtag, status: :ok
    end

    def update
        @eventtag.update(eventtag_params)
        render json: @eventtag, status: :accepted
    end

    def create
        render json: EventTag.create!(eventtag_params), status: :created
    end

    def destroy
        @eventtag.destroy 
        head :no_content
    end

    private 

    def eventtag_params
        params.permit(:event_id, :hashtag_id)
    end

    def find_event 
        @eventtag = EventTag.find(params[:id])
    end
end



